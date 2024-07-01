
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetflix from "../../src/components/MdiNetflix.vue";

test("MdiNetflix snapshot", () => {
  const wrapper = mount(MdiNetflix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
