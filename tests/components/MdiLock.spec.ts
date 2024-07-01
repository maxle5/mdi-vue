
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLock from "../../src/components/MdiLock.vue";

test("MdiLock snapshot", () => {
  const wrapper = mount(MdiLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
