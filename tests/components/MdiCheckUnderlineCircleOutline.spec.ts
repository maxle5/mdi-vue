
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCheckUnderlineCircleOutline from "../../src/components/MdiCheckUnderlineCircleOutline.vue";

test("MdiCheckUnderlineCircleOutline snapshot", () => {
  const wrapper = mount(MdiCheckUnderlineCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
