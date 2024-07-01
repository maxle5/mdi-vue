
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiDominoMask from "../../src/components/MdiDominoMask.vue";

test("MdiDominoMask snapshot", () => {
  const wrapper = mount(MdiDominoMask, {});
  expect(wrapper.html()).toMatchSnapshot();
});
