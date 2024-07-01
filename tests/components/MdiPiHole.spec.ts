
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPiHole from "../../src/components/MdiPiHole.vue";

test("MdiPiHole snapshot", () => {
  const wrapper = mount(MdiPiHole, {});
  expect(wrapper.html()).toMatchSnapshot();
});
