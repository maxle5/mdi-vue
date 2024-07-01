
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPostageStamp from "../../src/components/MdiPostageStamp.vue";

test("MdiPostageStamp snapshot", () => {
  const wrapper = mount(MdiPostageStamp, {});
  expect(wrapper.html()).toMatchSnapshot();
});
