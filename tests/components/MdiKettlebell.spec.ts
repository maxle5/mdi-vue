
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiKettlebell from "../../src/components/MdiKettlebell.vue";

test("MdiKettlebell snapshot", () => {
  const wrapper = mount(MdiKettlebell, {});
  expect(wrapper.html()).toMatchSnapshot();
});
