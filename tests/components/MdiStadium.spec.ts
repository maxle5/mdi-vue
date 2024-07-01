
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiStadium from "../../src/components/MdiStadium.vue";

test("MdiStadium snapshot", () => {
  const wrapper = mount(MdiStadium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
