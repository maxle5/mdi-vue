
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPanda from "../../src/components/MdiPanda.vue";

test("MdiPanda snapshot", () => {
  const wrapper = mount(MdiPanda, {});
  expect(wrapper.html()).toMatchSnapshot();
});
