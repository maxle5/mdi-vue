
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCertificate from "../../src/components/MdiCertificate.vue";

test("MdiCertificate snapshot", () => {
  const wrapper = mount(MdiCertificate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
