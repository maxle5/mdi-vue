
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHololens from "../../src/components/MdiHololens.vue";

test("MdiHololens snapshot", () => {
  const wrapper = mount(MdiHololens, {});
  expect(wrapper.html()).toMatchSnapshot();
});
