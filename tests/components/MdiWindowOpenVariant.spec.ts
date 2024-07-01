
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWindowOpenVariant from "../../src/components/MdiWindowOpenVariant.vue";

test("MdiWindowOpenVariant snapshot", () => {
  const wrapper = mount(MdiWindowOpenVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
