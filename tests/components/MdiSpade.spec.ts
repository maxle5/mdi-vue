
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSpade from "../../src/components/MdiSpade.vue";

test("MdiSpade snapshot", () => {
  const wrapper = mount(MdiSpade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
