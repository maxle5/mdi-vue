
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPictureInPictureBottomRightOutline from "../../src/components/MdiPictureInPictureBottomRightOutline.vue";

test("MdiPictureInPictureBottomRightOutline snapshot", () => {
  const wrapper = mount(MdiPictureInPictureBottomRightOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
