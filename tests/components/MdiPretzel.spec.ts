
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPretzel from "../../src/components/MdiPretzel.vue";

test("MdiPretzel snapshot", () => {
  const wrapper = mount(MdiPretzel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
