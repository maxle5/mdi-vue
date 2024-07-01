
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiJeepney from "../../src/components/MdiJeepney.vue";

test("MdiJeepney snapshot", () => {
  const wrapper = mount(MdiJeepney, {});
  expect(wrapper.html()).toMatchSnapshot();
});
