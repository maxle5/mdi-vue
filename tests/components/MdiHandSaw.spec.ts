
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHandSaw from "../../src/components/MdiHandSaw.vue";

test("MdiHandSaw snapshot", () => {
  const wrapper = mount(MdiHandSaw, {});
  expect(wrapper.html()).toMatchSnapshot();
});
