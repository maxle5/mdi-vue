
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewComfyOutline from "../../src/components/MdiViewComfyOutline.vue";

test("MdiViewComfyOutline snapshot", () => {
  const wrapper = mount(MdiViewComfyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
