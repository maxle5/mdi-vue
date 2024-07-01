
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGraveStone from "../../src/components/MdiGraveStone.vue";

test("MdiGraveStone snapshot", () => {
  const wrapper = mount(MdiGraveStone, {});
  expect(wrapper.html()).toMatchSnapshot();
});
