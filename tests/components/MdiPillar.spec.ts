
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPillar from "../../src/components/MdiPillar.vue";

test("MdiPillar snapshot", () => {
  const wrapper = mount(MdiPillar, {});
  expect(wrapper.html()).toMatchSnapshot();
});
