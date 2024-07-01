
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLingerie from "../../src/components/MdiLingerie.vue";

test("MdiLingerie snapshot", () => {
  const wrapper = mount(MdiLingerie, {});
  expect(wrapper.html()).toMatchSnapshot();
});
