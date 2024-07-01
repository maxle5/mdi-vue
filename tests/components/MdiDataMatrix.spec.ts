
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDataMatrix from "../../src/components/MdiDataMatrix.vue";

test("MdiDataMatrix snapshot", () => {
  const wrapper = mount(MdiDataMatrix, {});
  expect(wrapper.html()).toMatchSnapshot();
});
