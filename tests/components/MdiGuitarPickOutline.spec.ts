
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGuitarPickOutline from "../../src/components/MdiGuitarPickOutline.vue";

test("MdiGuitarPickOutline snapshot", () => {
  const wrapper = mount(MdiGuitarPickOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
