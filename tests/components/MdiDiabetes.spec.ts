
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDiabetes from "../../src/components/MdiDiabetes.vue";

test("MdiDiabetes snapshot", () => {
  const wrapper = mount(MdiDiabetes, {});
  expect(wrapper.html()).toMatchSnapshot();
});
