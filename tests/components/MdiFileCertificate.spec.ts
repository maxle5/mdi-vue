
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFileCertificate from "../../src/components/MdiFileCertificate.vue";

test("MdiFileCertificate snapshot", () => {
  const wrapper = mount(MdiFileCertificate, {});
  expect(wrapper.html()).toMatchSnapshot();
});
