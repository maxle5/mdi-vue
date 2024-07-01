
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiGoogleDownasaur from "../../src/components/MdiGoogleDownasaur.vue";

test("MdiGoogleDownasaur snapshot", () => {
  const wrapper = mount(MdiGoogleDownasaur, {});
  expect(wrapper.html()).toMatchSnapshot();
});
