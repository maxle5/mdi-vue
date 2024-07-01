
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVolcano from "../../src/components/MdiVolcano.vue";

test("MdiVolcano snapshot", () => {
  const wrapper = mount(MdiVolcano, {});
  expect(wrapper.html()).toMatchSnapshot();
});
