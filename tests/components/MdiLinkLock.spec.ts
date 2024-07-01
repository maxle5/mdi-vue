
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLinkLock from "../../src/components/MdiLinkLock.vue";

test("MdiLinkLock snapshot", () => {
  const wrapper = mount(MdiLinkLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
