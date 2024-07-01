
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBarley from "../../src/components/MdiBarley.vue";

test("MdiBarley snapshot", () => {
  const wrapper = mount(MdiBarley, {});
  expect(wrapper.html()).toMatchSnapshot();
});
