
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPentagon from "../../src/components/MdiPentagon.vue";

test("MdiPentagon snapshot", () => {
  const wrapper = mount(MdiPentagon, {});
  expect(wrapper.html()).toMatchSnapshot();
});
