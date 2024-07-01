
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCameraMeteringSpot from "../../src/components/MdiCameraMeteringSpot.vue";

test("MdiCameraMeteringSpot snapshot", () => {
  const wrapper = mount(MdiCameraMeteringSpot, {});
  expect(wrapper.html()).toMatchSnapshot();
});
