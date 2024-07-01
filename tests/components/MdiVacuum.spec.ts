
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVacuum from "../../src/components/MdiVacuum.vue";

test("MdiVacuum snapshot", () => {
  const wrapper = mount(MdiVacuum, {});
  expect(wrapper.html()).toMatchSnapshot();
});
