
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartBox from "../../src/components/MdiHeartBox.vue";

test("MdiHeartBox snapshot", () => {
  const wrapper = mount(MdiHeartBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
