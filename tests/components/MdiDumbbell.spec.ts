
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDumbbell from "../../src/components/MdiDumbbell.vue";

test("MdiDumbbell snapshot", () => {
  const wrapper = mount(MdiDumbbell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
