
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPictureInPictureTopRightOutline from "../../src/components/MdiPictureInPictureTopRightOutline.vue";

test("MdiPictureInPictureTopRightOutline snapshot", () => {
  const wrapper = mount(MdiPictureInPictureTopRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
