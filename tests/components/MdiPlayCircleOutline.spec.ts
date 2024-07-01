
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlayCircleOutline from "../../src/components/MdiPlayCircleOutline.vue";

test("MdiPlayCircleOutline snapshot", () => {
  const wrapper = mount(MdiPlayCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
