
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPictureInPictureBottomRight from "../../src/components/MdiPictureInPictureBottomRight.vue";

test("MdiPictureInPictureBottomRight snapshot", () => {
  const wrapper = mount(MdiPictureInPictureBottomRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
