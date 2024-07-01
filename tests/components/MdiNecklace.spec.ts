
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNecklace from "../../src/components/MdiNecklace.vue";

test("MdiNecklace snapshot", () => {
  const wrapper = mount(MdiNecklace, {});
  expect(wrapper.html()).toMatchSnapshot();
});
