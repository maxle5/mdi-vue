
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayBoxOutline from "../../src/components/MdiPlayBoxOutline.vue";

test("MdiPlayBoxOutline snapshot", () => {
  const wrapper = mount(MdiPlayBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
