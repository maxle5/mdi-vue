
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiViewCarousel from "../../src/components/MdiViewCarousel.vue";

test("MdiViewCarousel snapshot", () => {
  const wrapper = mount(MdiViewCarousel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
