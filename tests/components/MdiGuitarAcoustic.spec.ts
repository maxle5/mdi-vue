
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGuitarAcoustic from "../../src/components/MdiGuitarAcoustic.vue";

test("MdiGuitarAcoustic snapshot", () => {
  const wrapper = mount(MdiGuitarAcoustic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
