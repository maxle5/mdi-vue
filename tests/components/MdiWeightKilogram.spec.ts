
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWeightKilogram from "../../src/components/MdiWeightKilogram.vue";

test("MdiWeightKilogram snapshot", () => {
  const wrapper = mount(MdiWeightKilogram, {});
  expect(wrapper.html()).toMatchSnapshot();
});
