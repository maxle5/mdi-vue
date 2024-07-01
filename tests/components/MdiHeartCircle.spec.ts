
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHeartCircle from "../../src/components/MdiHeartCircle.vue";

test("MdiHeartCircle snapshot", () => {
  const wrapper = mount(MdiHeartCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
