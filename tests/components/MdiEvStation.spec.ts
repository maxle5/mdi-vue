
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiEvStation from "../../src/components/MdiEvStation.vue";

test("MdiEvStation snapshot", () => {
  const wrapper = mount(MdiEvStation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
