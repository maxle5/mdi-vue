
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCake from "../../src/components/MdiCake.vue";

test("MdiCake snapshot", () => {
  const wrapper = mount(MdiCake, {});
  expect(wrapper.html()).toMatchSnapshot();
});
