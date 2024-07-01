
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBaseballBat from "../../src/components/MdiBaseballBat.vue";

test("MdiBaseballBat snapshot", () => {
  const wrapper = mount(MdiBaseballBat, {});
  expect(wrapper.html()).toMatchSnapshot();
});
