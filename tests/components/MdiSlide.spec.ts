
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSlide from "../../src/components/MdiSlide.vue";

test("MdiSlide snapshot", () => {
  const wrapper = mount(MdiSlide, {});
  expect(wrapper.html()).toMatchSnapshot();
});
