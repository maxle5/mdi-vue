
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMessageLock from "../../src/components/MdiMessageLock.vue";

test("MdiMessageLock snapshot", () => {
  const wrapper = mount(MdiMessageLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
