
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFormTextboxLock from "../../src/components/MdiFormTextboxLock.vue";

test("MdiFormTextboxLock snapshot", () => {
  const wrapper = mount(MdiFormTextboxLock, {});
  expect(wrapper.html()).toMatchSnapshot();
});
