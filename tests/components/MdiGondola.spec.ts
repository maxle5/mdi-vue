
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGondola from "../../src/components/MdiGondola.vue";

test("MdiGondola snapshot", () => {
  const wrapper = mount(MdiGondola, {});
  expect(wrapper.html()).toMatchSnapshot();
});
