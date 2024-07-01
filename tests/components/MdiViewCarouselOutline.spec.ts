
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewCarouselOutline from "../../src/components/MdiViewCarouselOutline.vue";

test("MdiViewCarouselOutline snapshot", () => {
  const wrapper = mount(MdiViewCarouselOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
