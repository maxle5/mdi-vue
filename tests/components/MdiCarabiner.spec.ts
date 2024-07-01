
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarabiner from "../../src/components/MdiCarabiner.vue";

test("MdiCarabiner snapshot", () => {
  const wrapper = mount(MdiCarabiner, {});
  expect(wrapper.html()).toMatchSnapshot();
});
