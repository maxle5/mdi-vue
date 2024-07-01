
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCrossCeltic from "../../src/components/MdiCrossCeltic.vue";

test("MdiCrossCeltic snapshot", () => {
  const wrapper = mount(MdiCrossCeltic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
