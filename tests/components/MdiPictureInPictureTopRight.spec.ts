
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPictureInPictureTopRight from "../../src/components/MdiPictureInPictureTopRight.vue";

test("MdiPictureInPictureTopRight snapshot", () => {
  const wrapper = mount(MdiPictureInPictureTopRight, {});
  expect(wrapper.html()).toMatchSnapshot();
});
